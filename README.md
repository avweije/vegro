# vegro
Vegro Developer Festival

Ik heb gebruik gemaakt van HTML, CSS en JavaScript en voor het bijhouden van de aanmeldingen een klein PHP script.

Indien je een webserver gebruikt zonder PHP, dan zou alleen het aanmelden niet correct werken. Je kan wel een aanmelding doen, maar het wordt dan niet bijgehouden en er wordt geen correct antwoord gestuurd.

Ik heb het vrij simpel gehouden qua opzet. De vraag was of je wilt bijhouden dat iemand is aangemeld, zodat je de volgende keer dat je op de website komt je niet meer kan aanmelden. Ik heb gedacht aan eventueel een login, maar dat vond ik teveel voor een site als dit.

Je zou met een cookie kunnen bijhouden als wie er op deze pc is aangemeld, maar dan zou het lastig worden als je meerdere mensen wilt aanmelden via 1 pc.

Ook dit heb ik dus simpel gehouden, je kan aanmelden met een email adres, via een PHP script wordt in een JSON file bijgehouden welke email adressen aangemeld zijn en je krijgt een antwoord o.b.v. of je email adres al bekend was of niet.

Het bijhouden van de aanmeldingen doe ik dus in een JSON file, zodat het m.b.t. installatie eenvoudiger gehouden wordt. Anders zou je een database moeten hebben met de juiste login gegevens, etc.

Het echte designen van een website is niet mijn sterkste punt. Als ik een voorbeeld of design heb, kan ik dat prima namaken, maar het werkt voor mij altijd het beste met een voorbeeld en ik heb voor deze website dus gekeken naar de website van Vegro zelf.

Aangezien dit onderdeel zou zijn van de Vegro website of in ieder geval hieraan gerelateerd, heb ik de fonts, styling en kleuren van de Vegro website gebruikt voor het design.

Verder heb ik de lijst met sprekers, onderwerpen en de tijden waarop ze spreken ook in een JSON file opgeslagen. Deze wordt via JS ingelezen en geprint als de pagina is geladen.

Ik had de website nog willen voorzien van een aantal leuke teksten, maar aangezien ik nog niet genoeg weet van het festival en hoe dit te beschrijven, heb ik ze voor nu weggelaten.

Ik denk aan een beschrijving van wat het festival inhoudt, hoe het wellicht de vorige jaren was en gewoon een leuke uitnodigende tekst.
