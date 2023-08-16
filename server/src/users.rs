use axum::{extract::State, Json};
use serde::{Serialize, Deserialize};
use axum_macros::debug_handler;
use crate::{errors::CustomErrors, AppState};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct User {
    #[allow(dead_code)]
    usid: String,
    fullname: String,
    dob: Option<String>,
    gender: Option<String>,
    mob_phone: Option<String>,
    email: String,
    email_ver: bool,
    email_ver_token: Option<String>,
    passwd: Option<String>,
    authmethod: Option<String>,
    created_at: Option<chrono::DateTime<chrono::Utc>>,
}

#[debug_handler]
pub async fn fetchusershandler(State(state): State<AppState>) -> Result<Json<Vec<User>>, CustomErrors> {
    let db = &state.database.db;
    let people: Vec<User> = db.select("users").await.unwrap();
    match people.len() {
        0 => Err(CustomErrors::NoUsersFound),
        _ => Ok(Json(people)),
    }
}