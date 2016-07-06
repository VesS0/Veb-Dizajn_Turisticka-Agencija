
/*Kolacic (Cookie) je mali imenovani segment podataka koji Web citac pamti i koji je povezan sa odredenom Web stranom ili Web lokacijom.
Obicno se koristi da bi se podaci uneti na jednoj strani koristili na drugoj, tj. da bi citac mogao da ponovi korisnicke parametre ili 
druge promenljive stanja kada korisnik napusti stranu i kasnije se vrati.
*/
//ime=vrednost [;EXPIRES=datum] [;DOMAIN=imeDomena] [;PATH=putanja] [;SECURE] je format koji cookie mora da zadovolji
/* ime - ime koje defini�e upisani cookie;
 vrednost - informacija koja se �eli zapamtiti;
 datum - datum koji defini�e do kada cookie ostaje upisan na klijentskoj ma�ini;
 imeDomena - defini�e jedini domen sa kog cookie mo�e da se cita i da mu se menja vrednost;
 putanja - defini�e jedinu putanju sa koje cookie mo�e da se cita i da mu se menja vrednost;
 SECURE - upis i citanje cookie se izvr�ava preko posebnih, bezbednijih linija;
 Opcije EXPIRES, DOMAIN, PATH, SECURE su opcione i nije bitan redosled u kom se pojavljuju;
*/


function getCookie(c_name)
{
	
if (document.cookie.length>0)    // document.cookie je vrednost cookie-ja kojoj se pristupa kao stringu
{ 
c_start=document.cookie.indexOf(c_name + "=")  // indexOf nalazi poziciju prvog pojavljivanja specificirane vrednosti u stringu
if (c_start!=-1)   // -1 se vraca ako se specificirana vrednost nigde u stringu ne pojavljuje
{ 
c_start=c_start + c_name.length+1    //username=sofija c_start je 0 u c_start stavljamo poziciju prvog karaktera vrednosti cookie-a
c_end=document.cookie.indexOf(";",c_start)  // nalazi prvo pojavljivanje ; pocevsi pretrazivanje stringa od pozicije c_start
if (c_end==-1) c_end=document.cookie.length // ako je to jedini cookie onda nemamo ;
return document.cookie.substring(c_start,c_end)  // nalazi podstring od stringa pocev od pozicije c_start do c_end (ne ukljucuje karakter na poziciji c_end)
} 
}
return null
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setTime(exdate.getTime()+(expiredays*24*3600*1000))
document.cookie=c_name+ "=" +value+
((expiredays==null) ? "" : "; expires="+exdate)
}

function deleteCookie(c_name) {
	var exdate = new Date();
	exdate.setTime(exdate.getTime() - 10000);
	document.cookie = c_name + "=; expires=" + exdate;
}

function checkCookie()
{
username=getCookie('username')
if (username!=null)
  {alert('Welcome again '+username+'!')}
else 
  {
  username=prompt('Please enter your name:',"")
  if (username!=null||username!="")
    {
    setCookie('username',username,365)
    }
  }
}

			function initialize() {
			  var mapProp = {
				center:new google.maps.LatLng(51.508742,-0.120850),
				zoom:5,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			  };
			  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
			}
			google.maps.event.addDomListener(window, 'load', initialize);

