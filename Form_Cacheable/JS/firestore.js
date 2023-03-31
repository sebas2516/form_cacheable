function getFireStore() {
    var config = {
        'project_id' : 'formularios-5c962',
        'private_key' : 'private_key_here',
        'client_email' : 'client_email_here',
    };
    var firestore = FirestoreApp.getFirestore(config.client_email, config.private_key, config.project_id);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    // the following lines depend on the structure of your database
    // specify the document in the Firestore to access by replacing the countries with the name of your database
    const allDocuments = firestore.getDocuments("countries");
   // for each column and row in the document selected
   
    for(var i = 0; i < allDocuments.length; i++){
        //initializes the  array to be printed to Google Sheets
        var myArray = [];
        //accessing the first column, replace the “name” with the header of your first column
        var country = allDocuments[i].fields["name"];
        myArray.push(country.stringValue);
        //accessing the second column that has several entries, replace the “cities” with the header of your
        //second column
        var cities = allDocuments[i].fields["cities"];
        var cities2 = cities.arrayValue.values;
        var cities3 = [];
        for(var j = 0; j < cities2.length; j++){
            cities3.push(cities.arrayValue.values[j].stringValue);
        }
        myArray.push(cities3.join());
        //accessing the third column, replace the “capital” with the header of your third column
        var capital = allDocuments[i].fields["capital"];
        myArray.push(capital.stringValue);
        sheet.appendRow(myArray)
    }
}