use std::net::SocketAddr;
use surrealdb::opt::auth::Root;
use surrealdb::engine::remote::ws::{Ws, Client};
use surrealdb::Surreal;
use axum::{routing::get,Router};
mod users;
mod errors;
use dotenv::dotenv;


#[derive(Clone)]
pub struct AppState {
    pub database: Database,
}

#[derive(Clone)]
pub struct Database {
    db: Surreal<Client>,
}

async fn connect_to_server() -> surrealdb::Result<Surreal<Client>> {
    dotenv().ok();
    let database_acc: String = std::env::var("DB_ACC").expect("DB_ACC must be set");
    let db_ip: String = std::env::var("DB_IP").expect("DB_IP must be set");
    let db_pass: String = std::env::var("DB_PASS").expect("DB_PASS must be set");
    let db_ns: String = std::env::var("DB_NS").expect("DB_NS must be set");
    let db_name: String = std::env::var("DB_NAME").expect("DB_NAME must be set");
    let db: Surreal<Client> = Surreal::new::<Ws>(db_ip).await?;
    db.signin(Root {
        username: &database_acc,
        password: &db_pass,
    })
    .await?;
    db.use_ns(&db_ns).use_db(&db_name).await?;
    Ok(db)
}

#[tokio::main]
async fn main() {
  
    let db_result = connect_to_server().await;
    let db = match db_result {
        Ok(db) => db,
        Err(e) => panic!("Error connecting to the server: {}", e),
    };

    let state = AppState { database: Database { db } };
    let app = Router::new()
    .route("/api/v1/users", get(users::fetchusershandler))
    .with_state(state);
    // run it
    let addr = SocketAddr::from(([0, 0, 0, 0], 11000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
