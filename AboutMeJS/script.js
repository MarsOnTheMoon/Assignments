let t = document.createElement("title")

t.innerHTML = "About Marjorie Mars Preval";

document.body.appendChild(t)

let img = document.createElement("img");

img.src = "https://images.squarespace-cdn.com/content/5c7586bf34c4e2184f3bcb1f/8f6964c8-368b-4eef-972f-567f2734db4e/photocollage.jpeg?content-type=image%2Fjpeg";
'https://images.squarespace-cdn.com/content/5c7586bf34c4e2184f3bcb1f/8f6964c8-368b-4eef-972f-567f2734db4e/photocollage.jpeg?content-type=image%2Fjpeg'

document.body.appendChild(img);

img.id = "myphoto";

img.style.width = "450px";

let d = document.createElement("div");

document.body.appendChild(d);

d.innerHTML = "I'm from Queens, New York. I'm a professional photographer, with a BFA from Parsons: The New School. I take photos, play video games, make candles & home decor, and love sewing & embroidery.";

d.id = "intro";