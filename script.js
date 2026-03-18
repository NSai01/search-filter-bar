const products = {
  data: [
    {
      productName: "Tailored Oxford Shirt",
      category: "Topwear",
      price: 42,
      label: "New season",
      color: "linear-gradient(180deg, #f4f1ea 0%, #b7a28d 100%)",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQy3I2bwQoClcGgsU6vWBXOwCaisL-REtXkOCNgkKkaAMa8uYsxZnzq1TPXr0deG8Y6A-If1Q5P29QKoxQhAIM0R30Xuv9Ua08DDakbUMCFrmg4fFYd9VZl8g",
    },
    {
      productName: "Relaxed Pleated Trousers",
      category: "Bottomwear",
      price: 58,
      label: "Editor pick",
      color: "linear-gradient(180deg, #d9c6a5 0%, #78624f 100%)",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFszvIq9whAMuK96U6kEVXFz_jY1BDmKLOyqcuJZOpClIrvLAzHFs--IJYYM2NaamzE_UwdnzaFVunUahupv6OAxcN94UK",
    },
    {
      productName: "Chronograph Street Watch",
      category: "Watch",
      price: 119,
      label: "Best seller",
      color: "linear-gradient(180deg, #4e4e50 0%, #111111 100%)",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFOGpGpe3GC0uEGjZGagj5uv8Fxo98WBBC_MKpzqjK3woj5nhCdSHJTDlU7NSe68rsHhJPM2m0vUU-go8ZSds1gl509Gex",
    },
    {
      productName: "Textured Knit Polo",
      category: "Topwear",
      price: 36,
      label: "vibe",
      color: "linear-gradient(180deg, #ece4cf 0%, #8f7656 100%)",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLCBF4jHjSnGxJK-GDAGFkeVbeg6XJ6BnnpE90DJjBqmu5GDw3qW6kQ42KC4qBchvAhpSVi-R2GnislncaE-s116ud6mE7hDUkX7G-zK-ZRA2iyhpf1hWlAg",
    },
    {
      productName: "Urban Moto Jacket",
      category: "Jacket",
      price: 132,
      label: "Sharp fit",
      color: "linear-gradient(180deg, #514b45 0%, #1f1c1a 100%)",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5jOze2eCoK8V8xPg2DGiwut-T81MK33kwZqb6KNne2-IOui5_S6jRZ6UH1iKlMggCNpsZW7yvtjv3PloL0m_w3EL0NEqt3Jq72CeDWl1qb9oNEDjAro-i",
    },
    {
      productName: "Wide Leg Utility Pants",
      category: "Bottomwear",
      price: 67,
      label: "Just in",
      color: "linear-gradient(180deg, #dfd6c5 0%, #92806c 100%)",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlNEFadVzrxYzy6m6HSlBDSKsQkDwh5XXBBKjunQubak-yhZRJZdyWRAd_rM6d4BfY5qTto2FN1mhOUCtkMzGocyHrwwG2-OsKq_5SWCnr",
    },
    {
      productName: "Minimal Bomber Jacket",
      category: "Jacket",
      price: 148,
      label: "Limited drop",
      color: "linear-gradient(180deg, #b9b6b0 0%, #4f4a43 100%)",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsV1w0dr2z80rVzwo322oeiPFbfjPMDBrT2vtDPTjaL807EyJvQJm-dTkTwVlQlOqLxbk91Zbh2XdZS5bIxJ-vNnZc49buefOU8tnWT_2G",
    },
    {
      productName: "Tapered Comfort Pants",
      category: "Bottomwear",
      price: 54,
      label: "Everyday wear",
      color: "linear-gradient(180deg, #d9d8d4 0%, #7b7a78 100%)",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQInxoincCJWPNUUZ-GoJBsHEB4EzewDc-t_Ef-rzf9otEifyVB714wFpvcNdQ3u_FlzFOCrhvb_yh3dGEIyk7NhtSihb4s1CTOIv0yeu_07uJZgfpGym_z0w",
    },
  ],
};

const productsContainer = document.getElementById("products");
const resultCount = document.getElementById("result-count");
const activeFilterLabel = document.getElementById("active-filter-label");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search");

let activeCategory = "all";

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card", product.category);
  card.dataset.category = product.category;
  card.dataset.name = product.productName.toLowerCase();

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  const badge = document.createElement("span");
  badge.classList.add("product-badge");
  badge.innerText = product.label;

  const visual = document.createElement("div");
  visual.classList.add("product-visual");
  if (product.image) {
    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.image;
    image.alt = product.productName;
    visual.appendChild(image);
  } else {
    visual.style.background = product.color;
  }

  imgContainer.appendChild(badge);
  imgContainer.appendChild(visual);

  const container = document.createElement("div");
  container.classList.add("container");

  const category = document.createElement("p");
  category.classList.add("product-category");
  category.innerText = product.category;

  const name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = product.productName;

  const bottomRow = document.createElement("div");
  bottomRow.classList.add("product-bottom");

  const price = document.createElement("p");
  price.classList.add("price");
  price.innerText = `$${product.price}`;

  const wishlist = document.createElement("span");
  wishlist.classList.add("wishlist");
  wishlist.innerText = "Wishlist +";

  bottomRow.appendChild(price);
  bottomRow.appendChild(wishlist);

  container.appendChild(category);
  container.appendChild(name);
  container.appendChild(bottomRow);

  card.appendChild(imgContainer);
  card.appendChild(container);
  productsContainer.appendChild(card);
}

products.data.forEach(createProductCard);

function updateResults() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesSearch = card.dataset.name.includes(query);
    const shouldShow = matchesCategory && matchesSearch;

    card.classList.toggle("hide", !shouldShow);

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  resultCount.innerText = `${visibleCount} item${visibleCount === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hide", visibleCount !== 0);

  const filterText = activeCategory === "all" ? "all" : activeCategory;
  activeFilterLabel.innerText = `Showing ${filterText}`;
}

function filterProduct(value) {
  activeCategory = value;

  const buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    const isActive = value.toUpperCase() === button.innerText.toUpperCase();
    button.classList.toggle("active", isActive);
  });

  updateResults();
}

searchButton.addEventListener("click", updateResults);
searchInput.addEventListener("input", updateResults);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateResults();
  }
});

window.onload = () => {
  filterProduct("all");
};
