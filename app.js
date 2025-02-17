console.log("testing");



const radioFuc = (event) => {
    event.preventDefault();
    var radioEmployee = document.getElementById("radioEmployee");
    var radioCustomer = document.getElementById("radioCustomer");
    var verificationBox = document.getElementById("employeeVerify");
    if (radioEmployee.checked) {
        verificationBox.style.display = "block";
    }
    if (radioCustomer.checked) {
        window.location.href = "customerSignin.html";
    }
}

function verifyEmployee() {
    var verificationInput = document.getElementById("verification_code");
    if (verificationInput.value === "12345") {
        window.location.href = "employeeSignin.html"
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verification code incorrect, Try Again",
        });
    }
}

function closeVerify() {
    var verificationBox = document.getElementById("employeeVerify");
    verificationBox.style.display = "none";
};

var employeeArr = [
    {
        id: 1,
        fullName: "Allama Iqbal",
        email: "allama@gmail.com",
        pass: "12345",
        statuss: "employee"
    },
    {
        id: 2,
        fullName: "Sir Syed Ahmed Khan",
        email: "sirsyed@gmail.com",
        pass: "12345",
        statuss: "employee"
    },
    {
        id: 3,
        fullName: "Liaquat Ali Khan",
        email: "liaquat@gmail.com",
        pass: "12345",
        statuss: "employee"
    }
];
var managerArr = [
    {
        id: 4,
        fullName: "Fatima Jinnah",
        email: "fatima@gmail.com",
        pass: "12345",
        statuss: "manager"
    },
    {
        id: 5,
        fullName: "Chaudhry Rahmat Ali",
        email: "rahmat@gmail.com",
        pass: "12345",
        statuss: "manager"
    }
];
var partnerArr = [
    {
        id: 6,
        fullName: "Quaid-e-Azam Muhammad Ali Jinnah",
        email: "quaid@gmail.com",
        pass: "12345",
        statuss: "partner"
    }
];
var customerArr = [
    {
        id: 7,
        fullName: "Gandhi",
        email: "gandhi@gmail.com",
        pass: "12345",
        statuss: "customer"
    }
];
var idCount = 7;

var obj;
var getObj;
const employeeSign = (event) => {
    event.preventDefault();

    var employeeSignName = document.getElementById("employee_sign_name");
    var employeeSignEmail = document.getElementById("employee_sign_email");
    var employeeSignPass = document.getElementById("employee_sign_pass");

    var employeeStatus = document.getElementById("employee_status");
    var managerStatus = document.getElementById("manager_status");
    var partnerStatus = document.getElementById("partner_status");
    var signAlertTarget = document.getElementById("sign_alert_target");

    if (employeeStatus.checked) {
        idCount++
        obj = {
            id: idCount,
            fullName: employeeSignName.value,
            email: employeeSignEmail.value,
            pass: employeeSignPass.value,
            statuss: "employee"
        };
        console.log("Employee Signedin");
        employeeArr.push(obj);
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("managerArr", JSON.stringify(managerArr));
        localStorage.setItem("partnerArr", JSON.stringify(partnerArr));

        signAlertTarget.innerHTML =
            `
           <div class="sign_alert_target">
                <h2>User has Signed UP!</h2>
            </div>
        `
    }
    else if (managerStatus.checked) {
        idCount++;
        obj = {
            id: idCount,
            fullName: employeeSignName.value,
            email: employeeSignEmail.value,
            pass: employeeSignPass.value,
            statuss: "manager"
        };
        console.log("Manager Signedin");
        managerArr.push(obj);
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("managerArr", JSON.stringify(managerArr));
        localStorage.setItem("partnerArr", JSON.stringify(partnerArr));

        signAlertTarget.innerHTML =
            `
           <div class="sign_alert_target">
                <h2>User has Signed UP!</h2>
            </div>
        `
    }
    else if (partnerStatus.checked) {
        idCount++;
        obj = {
            id: idCount,
            fullName: employeeSignName.value,
            email: employeeSignEmail.value,
            pass: employeeSignPass.value,
            statuss: "partner"
        };
        console.log("Partner Signedin");
        partnerArr.push(obj);
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("managerArr", JSON.stringify(managerArr));
        localStorage.setItem("partnerArr", JSON.stringify(partnerArr));

        signAlertTarget.innerHTML =
            `
           <div class="sign_alert_target">
                <h2>User has Signed UP!</h2>
            </div>
        `
    }
};

const customerSign = (event) => {
    event.preventDefault();
    localStorage.setItem("customerArr", JSON.stringify(customerArr));
    var getCustomerArr = JSON.parse(localStorage.getItem("customerArr"));


    var customerSignName = document.getElementById("customer_sign_name");
    var customerSignEmail = document.getElementById("customer_sign_email");
    var customerSignPass = document.getElementById("customer_sign_pass");
    var signAlertTarget = document.getElementById("sign_alert_target");

    idCount++
    obj = {
        id: idCount,
        fullName: customerSignName.value,
        email: customerSignEmail.value,
        pass: customerSignPass.value,
        statuss: "customer"
    }
    getCustomerArr.push(obj);
    localStorage.setItem("customerArr", JSON.stringify(getCustomerArr));
    signAlertTarget.innerHTML =
        `
           <div class="sign_alert_target">
                <h2>User has Signed UP!</h2>
            </div>
        `
}

localStorage.setItem("loginStatus", true);
var getLoginStatusValue = localStorage.getItem("loginStatus");
const loginFunc = (event) => {
    event.preventDefault();

    var loginEmployeeStatus = document.getElementById("login_employee_status");
    var loginCustomerStatus = document.getElementById("login_customer_status");

    var loginEmail = document.getElementById("login_email");
    var loginPass = document.getElementById("login_pass");

    var getEmployeeArr = JSON.parse(localStorage.getItem("employeeArr"));
    var getManagerArr = JSON.parse(localStorage.getItem("managerArr"));
    var getPartnerArr = JSON.parse(localStorage.getItem("partnerArr"));
    var getCustomerArr = JSON.parse(localStorage.getItem("customerArr"));

    if (loginEmployeeStatus.checked) {
        for (var i = 0; i < getEmployeeArr.length; i++) {
            if (loginEmail.value === getEmployeeArr[i].email && loginPass.value === getEmployeeArr[i].pass) {
                var loggedCustomerObj = getEmployeeArr[i];
                localStorage.setItem("loggedCustomerObj", JSON.stringify(loggedCustomerObj));
                localStorage.setItem("loggedEmployeeName", getEmployeeArr[i].fullName);
                localStorage.setItem("loggedEmployeeStatus", getEmployeeArr[i].statuss);
                localStorage.setItem("customerArr", JSON.stringify(customerArr));
                localStorage.setItem("productArr", JSON.stringify(productsArr));
                if (getLoginStatusValue === "false") {
                    localStorage.setItem("loginStatus", true);
                }
                window.location.href = "./dashboard.html";
                return;
            } else {
                Swal.fire({
                    title: "Incorrect email or Password!",
                    icon: "error"
                });
            }
        }
        for (var i = 0; i < getManagerArr.length; i++) {
            if (loginEmail.value === getManagerArr[i].email && loginPass.value === getManagerArr[i].pass) {
                var loggedCustomerObj = getManagerArr[i];
                localStorage.setItem("loggedCustomerObj", JSON.stringify(loggedCustomerObj));
                localStorage.setItem("loggedEmployeeName", getManagerArr[i].fullName);
                localStorage.setItem("loggedEmployeeStatus", getManagerArr[i].statuss);
                localStorage.setItem("customerArr", JSON.stringify(customerArr));
                localStorage.setItem("productArr", JSON.stringify(productsArr));
                if (getLoginStatusValue === "false") {
                    localStorage.setItem("loginStatus", true);
                    console.log(localStorage.getItem("loginStatus"), "LogginStatus After Logging in");
                }
                window.location.href = "./dashboard.html";
                return;
            } else {
                Swal.fire({
                    title: "Incorrect email or Password!",
                    icon: "error"
                });
            }
        }
        for (var i = 0; i < getPartnerArr.length; i++) {
            if (loginEmail.value === getPartnerArr[i].email && loginPass.value === getPartnerArr[i].pass) {
                var loggedCustomerObj = getPartnerArr[i];
                localStorage.setItem("loggedCustomerObj", JSON.stringify(loggedCustomerObj));
                localStorage.setItem("loggedEmployeeName", getPartnerArr[i].fullName);
                localStorage.setItem("loggedEmployeeStatus", getPartnerArr[i].statuss);
                localStorage.setItem("customerArr", JSON.stringify(customerArr));
                localStorage.setItem("productArr", JSON.stringify(productsArr));
                if (getLoginStatusValue === "false") {
                    localStorage.setItem("loginStatus", true);
                }
                window.location.href = "./dashboard.html";
                return;
            } else {
                Swal.fire({
                    title: "Incorrect email or Password!",
                    icon: "error"
                });
            }
        }
    }
    if (loginCustomerStatus.checked) {
        for (var i = 0; i < getCustomerArr.length; i++) {
            if (loginEmail.value === getCustomerArr[i].email && loginPass.value === getCustomerArr[i].pass) {
                var loggedCustomerObj = getCustomerArr[i];
                localStorage.setItem("loggedCustomerObj", JSON.stringify(loggedCustomerObj));
                localStorage.setItem("productArr", JSON.stringify(productsArr));
                if (getLoginStatusValue === "false") {
                    localStorage.setItem("loginStatus", true);
                }
                window.location.href = "./website.html";
                return;
            } else {
                Swal.fire({
                    title: "Incorrect email or Password!",
                    icon: "error"
                });
            }
        };
    }
}

// localStorage.clear()

var productsArr = [
    {
        productId: 1,
        name: "Philadelphia Eagles",
        price: "1,500/-",
        image: "https://i.ebayimg.com/00/s/MTIxMlgxNjAw/z/oiAAAOSw3NBfUAG2/$_57.JPG?set_id=8800005007",
        parra: "Gritty, resilient NFL team celebrated for their devoted fanbase, strong defense, and 2018 Super Bowl victory."
    },
    {
        productId: 2,
        name: "San Francisco 49ers",
        price: "1,500/-",
        image: "https://images.footballfanatics.com/san-francisco-49ers/mens-new-era-scarlet-san-francisco-49ers-script-sided-59fifty-fitted-hat_ss5_p-201124737+u-tybkcoqccu1hngv9gmun+v-56urcqdzhu08bnb9nrrd.jpg?_hv=2&w=340",
        parra: "Legendary NFL franchise boasting multiple Super Bowl titles, iconic players, and a strong focus on balanced gameplay."
    },
    {
        productId: 3,
        name: "Seattle Seahawks",
        price: "1,500/-",
        image: "https://img.hatshopping.co.uk/59Fifty-NFL-Seattle-Seahawks-Cap-by-New-Era-navy.64539_rf192.jpg",
        parra: " Fierce competitors with a rabid fanbase, known for their Legion of Boom defense and thrilling NFC West clashes."
    },
    {
        productId: 4,
        name: "Detroit Lions",
        price: "1,500/-",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHvL1hXvriuNcQ9PLC5Y_WipSh-VYnyXYPg&s",
        parra: " A historic NFL team striving for success, cherished for their loyal fans and annual Thanksgiving Day game tradition."
    },
    {
        productId: 5,
        name: "Tampa Bay Buccaneers",
        price: "1,500/-",
        image: "https://images.footballfanatics.com/tampa-bay-buccaneers/mens-new-era-red-tampa-bay-buccaneers-team-basic-59fifty-fitted-hat_pi3911000_altimages_ff_3911755-cbd2bee7b4c501e64740alt1_full.jpg?_hv=2&w=900",
        parra: "A revitalized franchise with recent Super Bowl success, boasting top talent and a strong presence in the NFC South."
    },
    {
        productId: 6,
        name: "Buffalo Bills",
        price: "1,500/-",
        image: "https://shop.buffalobills.com/cdn/shop/products/BILLMH0022C.jpg?v=1627050092",
        parra: "Resilient team with a rich history, passionate fans, and recent dominance in the AFC, seeking their first Super Bowl."
    },
    {
        productId: 7,
        name: "Green Bay Packers",
        price: "1,500/-",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s4kcDk37QWMYDyFVsJ8ant-18UueCMCBMg&s",
        parra: "Iconic, fan-owned franchise with a legendary history, famed for cold-weather football and Hall of Fame quarterbacks."
    },
    {
        productId: 8,
        name: "Los Angeles Rams",
        price: "1,500/-",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy46zz0OjqxbEHMk_gVNsTKHWg2ouEHgegew&s",
        parra: "A dynamic NFL team with a storied history, known for innovative offenses and a passionate Southern California fan base."
    },
    {
        productId: 9,
        name: "Kansas City Chiefs",
        price: "1,500/-",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6neNvFx7hERDEb0jH_7jKmYcV9e_MI2kfxQ&s",
        parra: " Electrifying NFL team led by Patrick Mahomes, excelling with dynamic plays and a dominant offensive strategy."
    },
    {
        productId: 10,
        name: "Los Angeles Chargers",
        price: "1,500/-",
        image: "https://fanatics.frgimages.com/los-angeles-chargers/mens-new-era-blue-los-angeles-chargers-basic-9fifty-adjustable-snapback-hat_pi3852000_ff_3852970-317e896686e395a69d13_full.jpg?_hv=2",
        parra: " High-powered NFL team renowned for explosive offenses, led by star quarterbacks, and based in Southern California."
    },
    {
        productId: 11,
        name: "Baltimore Ravens",
        price: "1,500/-",
        image: "https://fanatics.frgimages.com/baltimore-ravens/mens-new-era-black-baltimore-ravens-omaha-59fifty-fitted-hat_pi2539000_ff_2539476_full.jpg?_hv=2&w=900",
        parra: "Gritty AFC team, celebrated for fierce defenses, two Super Bowl wins, and a tough, blue-collar identity."
    },
    {
        productId: 12,
        name: "Arizona Cardinals",
        price: "1,500/-",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw7Kv3WDTUiikPli1ZrUbbr2yl21fZT91Pg&s",
        parra: "Oldest NFL franchise, blending tradition with modern talent, aiming for success in the competitive NFC West."
    }
];

var quantityCount = 0;
const cardsPrint = () => {
    var getProductArr = JSON.parse(localStorage.getItem("productArr")) || productsArr;
    var cardsTarget = document.getElementById("cards_target");
    var cardHtml = "";

    for (var i = 0; i < getProductArr.length; i++) {
        cardHtml +=
            `
            <div class="main_card">
                <div class="card_img"><img src="${getProductArr[i].image}"></div>
                <div class="card_title"><h2>${getProductArr[i].name}</h2></div>
                <div class="card_parra"><p>${getProductArr[i].parra}</p></div>
                 <div class="card_price"><h2>${getProductArr[i].price}</h2></div>
                <div class="card_button">
                    <div class="quantity">
                        <button onclick="quantityMinus(${getProductArr[i].productId})"><i class="fa-solid fa-minus"></i></button>
                        <div id="${getProductArr[i].productId}" class="quantity_target">${quantityCount}</div>
                        <button onclick="quantityAdd(${getProductArr[i].productId})"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button onclick="addToCart(${[i]})">Add To Cart</button>
                </div>
            </div>
            `
    }
    cardsTarget.innerHTML = cardHtml
}
cardsPrint()

const quantityMinus = (productId) => {
    var quantityTarget = document.getElementById(productId);
    var currentCount = Number(quantityTarget.innerHTML);
    if (currentCount > 0) {
        quantityTarget.innerHTML = currentCount - 1;
    }
}
const quantityAdd = (productId) => {
    var quantityTarget = document.getElementById(productId);
    var currentCount = Number(quantityTarget.innerHTML);
    quantityTarget.innerHTML = currentCount + 1;
}

var productCartArr = JSON.parse(localStorage.getItem("productCartArr")) || [];
localStorage.setItem("productCartArr", JSON.stringify(productCartArr))
const addToCart = (index) => {
    var getLoginStatus = localStorage.getItem("loginStatus");
    var productProfile = productsArr[index];

    var quantityElement = document.getElementById(productProfile.productId);
    var quantityCount = parseInt(quantityElement.innerHTML);

    if (quantityCount <= 0) {
        Swal.fire({
            title: "Product is not added to your cart!",
            icon: "error"
        });
        return;
    }

    if (getLoginStatus === "true") {
        var orderMade = {
            productID: productProfile.productId,
            name: productProfile.name,
            image: productProfile.image,
            parra: productProfile.parra,
            price: productProfile.price,
            quantity: quantityCount
        }
        productCartArr.push(orderMade);
        localStorage.setItem("productCartArr", JSON.stringify(productCartArr));
        Swal.fire({
            title: "Product is added to your cart!",
            icon: "success"
        });
    }
    else if (getLoginStatus === false) {
        Swal.fire({
            title: "Please Login First!",
            icon: "error"
        });
        window.location.href = "./customerSignin.html";
    }
}
