let cont = document.querySelector( "#cont" );
let sidebar = document.querySelector( ".sidebar" );
let rd = document.querySelector( "#re" );
cont.onclick = function ()
{
    if ( sidebar.id === "closs" )
    {
        sidebar.style.cssText = "display: block; position: absolute; height: 100vh; top: 0; "
        rd.classList = "fas fa-times fa-fw"
        sidebar.id = "open";
        cont.style.cssText="top:10px; left:10px;"
    }

    else
    {
        cont.onclick = function ()
        {
            sidebar.style.cssText = "display: none;"
            re.classList = "fas fa-bars fa-fw"
            sidebar.id = "closs";
            window.location.reload();
        }
    }
}