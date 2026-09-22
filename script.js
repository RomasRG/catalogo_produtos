class Interface{
    visualizarProdutos(produtos){
        for(const produto of produtos){
            const body = document.querySelector("#productsTable tbody");
            const element = document.createElement('tr');
            const id = document.createElement('td');
            const name = document.createElement('td');
            const price = document.createElement('td');
            const stock = document.createElement('td');
            const category = document.createElement('td');
            const provider = document.createElement('td');

            id.className = "prodId";
            id.id = produto.id;
            id.textContent = produto.id;
            name.className = "prodName";
            name.textContent = produto.name;
            price.className = "prodPrice";
            price.textContent = "R$ " + produto.price.toFixed(2);
            stock.className = "prodStock";
            stock.textContent = produto.stock;
            category.className = "prodCategory";
            category.textContent = produto.category.name;
            provider.className = "prodProvider";
            provider.textContent = produto.provider;
            element.append(id, name, price, stock, category, provider);
            body.append(element);
        }
    };

    visualizarCategorias(categorias){
        const categories = document.getElementById("categories");
        console.log(categorias);
        for(const categoria of categorias){
            console.log(categoria);
            const checkbox = document.createElement("input");
            const label = document.createElement("label");
            const division = document.createElement("div");
            division.className = "catogory"
            checkbox.type = "checkbox";
            checkbox.name = categoria.name;
            checkbox.id = categoria.id;
            checkbox.addEventListener('change', ()=>{
                if(checkbox.checked){
                    this.visualizarProdutos(banco.products.filter(product => product.category === categoria.name))
                }
            });
            label.setAttribute("for", categoria.id)
            label.textContent = categoria.name;
            division.append(checkbox);
            division.append(label);
            categories.append(division);
        }
    }
}

var banco = {
    products: [],
    providers: [],
    categories: [],
    
    setProducts(products){
        this.products = products;
        for(const product of this.products){
            if(!this.categories.some(category => category.id === product.category.id)){
                this.categories.push(product.category);
            }
            if(!this.providers.some(provider => provider.id == this.providers.id)){
                this.providers.push(product.provider);
            }
        }
        return this.products;
    },

    addProduct(product){
        this.products.push(product);
        if(!this.categories.includes(product.category)){
            this.categories.push(product.category);
        }
        if(!this.providers.includes(product.provider)){
            this.providers.push(product.provider);
        }
        return this.products;
    },
    addCategory(category){
        this.categories.push(category);
        return this.categories;
    },
    addProvider(provider){
        this.providers.push(provider);
        return this.providers;
    },
    removeProduct(idProd){
        this.products = this.products.filter(product => product.id != idProd);
        banco.setProducts(this.products);
        return this.products;
    },
    removeCategory(idCategory){
        this.categories = this.categories.filter(
            category => category.id !== idCategory
        );
        return this.categories;
    },
    removeProvider(idProvider){
        this.providers = this.providers.filter(
            provider => provider.id !== idProvider
        );
        return this.providers;
    }
}

class Product{
    constructor(id, name, price, stock, category, provider){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.provider = provider;
    }
}

class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class Provider{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

// const prodTeste = new Product("123", "sabao", 12, 5, "limpeza", "Veja");
const interface = new Interface;
const produtos = [
    new Product("133", "detergente", 12, 25, new Category(1, "limpeza"), "Ype"),
    new Product("143", "guarana", 7.5, 15, new Category(2, "bebida"), "Coca-cola"),
    new Product("153", "pastel", 6.5, 12, new Category(3 ,"padaria"), "Panificadora da Terra"),
    new Product("163", "caderno", 15, 12, new Category(4, "escritorio"), "tilibra"),
    new Product("173", "lapis", 6, 25, new Category(4, "escritorio"), "Faber Castell")
];

banco.setProducts(produtos);
console.log(banco.products);
interface.visualizarProdutos(banco.products);
console.log(banco.categories);
interface.visualizarCategorias(banco.categories);
