window.addEventListener("load",init);

let reversee = false;
//Deze klasse Product bevat de nodige attributen en methoden om één product te creëren in HTML.
class Product {
    constructor(titelFoto, foto, naam) {
        this.titelFoto = titelFoto;
        this.foto = foto;
        this.naam = naam;
    }

    generateHtml() {
        let section = document.createElement("section");
        section.setAttribute("class",klasse[3]);

        let h4 = document.createElement("h4");
        h4.setAttribute("class", klasse[1]);
        let textnodes = document.createTextNode(this.titelFoto)
        h4.appendChild(textnodes);
        section.appendChild(h4);

        let img = document.createElement("img");
        img.setAttribute("src", this.foto);
        img.setAttribute("class", klasse[4]);
        section.appendChild(img);

        let p = document.createElement("h4");
        p.setAttribute("class", klasse[4]);
        let textnode2 = document.createTextNode(this.naam)
        p.appendChild(textnode2);
        section.appendChild(p);

        return section;
    }
}

//Deze klasse ProductCategorie bevat de nodige attributen en methoden om één categorie te creëren in HTML inclusief de onderliggende producten.
class productCategorie {
    constructor(producten = []) {
        this.producten = producten;
    }

    voegProductToe(product) {
        this.producten.push(product);
    }

    generateHtml(index) {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.setAttribute("class", klasse[0]);
        let textNode2 = document.createTextNode(categorie[index]);
        h3.appendChild(textNode2);
        article.appendChild(h3);

        for (let i = 0; i < this.producten.length; i++) {
            article.appendChild((this.producten[i]));
        }

        return article;
    }
}

function maakCategorie(categorie) {
    let categories = new productCategorie();
    for (let i = 0; i < categorie.length; i++) {
        let product = new Product(categorie[i][1],categorie[i][0],categorie[i][1]);
        categories.voegProductToe(product.generateHtml());
    }
    return categories;
}

function productPagina() {
    let section = document.createElement("section");

    let h2 = document.createElement("h2");
    h2.setAttribute("class", klasse[2]);
    h2.innerHTML = hoofdtitel;
    section.appendChild(h2);

    if(reversee === false) {
        let categorie1 = maakCategorie(standaardReeks).generateHtml(0);
        section.appendChild(categorie1);
        let categorie2 = maakCategorie(hybrideReeks).generateHtml(1);
        section.appendChild(categorie2);
        let categorie3 = maakCategorie(xReeks).generateHtml(2);
        section.appendChild(categorie3);
        let categorie4 = maakCategorie(mReeks).generateHtml(3);
        section.appendChild(categorie4);
    } else {
        let categorie1 = maakCategorie(standaardReeks).generateHtml(3);
        section.appendChild(categorie1);
        let categorie2 = maakCategorie(hybrideReeks).generateHtml(2);
        section.appendChild(categorie2);
        let categorie3 = maakCategorie(xReeks).generateHtml(1);
        section.appendChild(categorie3);
        let categorie4 = maakCategorie(mReeks).generateHtml(0);
        section.appendChild(categorie4);
    }
    return section;
}

function init() {
    let a = document.createElement("a");
    a.setAttribute("href",reverseArray[2]);
    let textnodes2 = document.createTextNode(reverseArray[1]);
    a.appendChild(textnodes2);


    let button = document.createElement("button");
    button.addEventListener("click",reverse);
    button.innerHTML = "reverse";

    document.getElementById("main").appendChild(a);
    document.getElementById("main").appendChild(button);
    document.getElementById("main").appendChild(productPagina());
}

function reverse() {
    standaardReeks.reverse();
    hybrideReeks.reverse();
    xReeks.reverse();
    mReeks.reverse();
    reversee = reversee !== true;
    let main = document.getElementById("main");
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
    init();
}