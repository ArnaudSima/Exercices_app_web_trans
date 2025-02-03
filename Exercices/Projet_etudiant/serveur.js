/*
 Importation des modules requis
 */
import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";
import {body, validationResult} from "express-validator";
import dateFormat from "dateformat";

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

/*
Connexion au serveur
*/ 


const serveur = app.listen(4000, () =>{
    console.log("serveur fonctionne sur 4000... !");
})
/*
    Configuration de EJS
*/
app.set("views", path.join(_dirname, "views"));
app.set("view engine","ejs");

/*
    Importation de Bootstrap
*/
app.use("/js", express.static(_dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(_dirname + "/node_modules/bootstrap/dist/css"));

/*
    Connection au serveur MySQL
*/

const con = mysql.createConnection(
    {
        host: "localhost",
        user: "scott",
        password: "oracle",
        database: "mybd"
    }
);
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
}

)

/*
    Description des routes 
 */
app.get("/", (req, res) => {
 con.query("SELECT * FROM e_events ORDER BY e_start_date DESC",
    (err,result) => {
    if(err) throw err;
    res.render("pages/ajouter-evenement.ejs", {
        siteTitle: "Application simple",
        pageTitle: "Liste d'evenements",
        items: result

    });
 });
});