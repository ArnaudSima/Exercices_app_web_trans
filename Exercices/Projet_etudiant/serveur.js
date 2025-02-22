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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

);

/*
    Description des routes 
 */
app.get("/", (req, res) => {
 con.query("SELECT * FROM e_events ORDER BY e_start_date DESC", (err,result) => {
    if(err) throw err;
    res.render("pages/index.ejs", {
        siteTitle: "Application simple",
        pageTitle: "Liste d'evenements",
        items: result

    });
 });
});

app.get("/event/edit/:id", function (req, res) {
  const requete = "SELECT * FROM e_events WHERE e_id = ?";
  const parametres = [req.params.id];
  con.query(requete, parametres, function (err, result) {
    if (err) throw err;
    result[0].e_start_date = dateFormat(result[0].e_start_date, "yyyy-mm-dd");
    result[0].e_start_end = dateFormat(result[0].e_end_date, "yyyy-mm-dd");
    res.render("pages/edit-event.ejs", {
      siteTitle: "Application simple",
      pageTitle: "Editer événement : " + result[0].e_name,
      items: result,
    });
  });
});


app.post("/event/edit/:id", function(req,res){
    const requete ="UPDATE e_events SET e_name = ?, e_start_date = ?, e_start_end = ?,e_desc =?, e_location = ? WHERE e_id = ?";
    const parametres = [
        req.body.e_name,
        req.body.e_start_date,
        req.body.e_end_date,
        req.body.e_desc,
        req.body.e_location,
        req.body.e_id
    ];
    con.query(requete, parametres,function(err,result){
        if(err) throw err;
        res.redirect("/");
    });
});

app.get("/event/delete/:id", function(req,res){
    const requete = "DELETE FROM e_event WHERE e_id = ?";
    con.query(requete,[req.params.id], function(err, result){
        if (err) throw err;
        res.redirect("/");
    });
});
