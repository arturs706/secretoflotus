use axum::{http::StatusCode, response::IntoResponse, Json};
use serde_json::json;

#[derive(Debug)]

pub enum CustomErrors {
    NoUsersFound,
}

impl IntoResponse for CustomErrors {
    fn into_response(self) -> axum::response::Response {
        let (status, err_msg) = match self {
            Self::NoUsersFound => (StatusCode::NOT_FOUND,"No users found"),
            };
            (status, Json(json!({ "error": err_msg}))).into_response()
            
    }
}