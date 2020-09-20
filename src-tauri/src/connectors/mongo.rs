use mongodb::{options::ClientOptions, Client};
use tokio::{runtime};

#[derive(Clone, Debug)]
pub struct DB {}

impl DB {
   async fn build(&self) -> Result<(), mongodb::error::Error> {
       let client = Client::with_uri_str("mongodb://root:example@localhost:27017").await?;
       for db_name in client.list_database_names(None, None).await? {
           println!("{}", db_name);
       }
       Ok(())
   }
}


// Store


// Build the client
// 1. Get url from settings
// 2. discover all the client options I need to run
// 3. Create the handler
// 4. Test the handler for a successful database pull
// 5. Return the handler

// Create new record
pub fn create_record() {
    println!("Getting DB info");
    let db = DB {};
    runtime::Runtime::new().unwrap().block_on(db.build());
}
// Read records
// Update records
