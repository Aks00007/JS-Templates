let users = [
    {
        name: "Elena Rodriguez",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "Freelance photographer specializing in urban landscapes and street style."
    },
    {
        name: "Marcus Chen",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        bio: "Software engineer by day, amateur jazz pianist by night."
    },
    {
        name: "Sarah Jenkins",
        pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        bio: "Environmental scientist passionate about sustainable living and zero-waste."
    }
];

function showUsers(arr) {
    arr.forEach((user) => {
        // 1. Create the main card container
        const card = document.createElement('div');
        card.className = 'card';

        // 2. Create the background image
        const img = document.createElement('img');
        img.src = user.pic;
        img.className = 'bg-img';

        // 3. Create the blurred layout overlay
        const blurredLayout = document.createElement('div');
        blurredLayout.style.backgroundImage= `url(${user.pic})`;
        blurredLayout.className = 'blurred-layout';

        // 4. Create the content container and its children
        const content = document.createElement('div');
        content.className = 'content';

        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        const p = document.createElement('p');
        p.textContent = user.bio;

        // 5. Assemble the content div
        content.appendChild(h3);
        content.appendChild(p);

        // 6. Assemble the final card
        card.appendChild(img);
        card.appendChild(blurredLayout);
        card.appendChild(content);

        // 7. Append to the body (or a specific container)
        document.querySelector(".cards").appendChild(card);
    })
}

showUsers(users)

let inp= document.querySelector(".inp");
let displayMessage= document.querySelector(".display-message");

inp.addEventListener("input", ()=> {
    let newUsers= users.filter((user)=> {
        return user.name.toLowerCase().includes(inp.value);
    });

    document.querySelector(".cards").innerHTML= "";
    
    if(newUsers.length===0) {
        displayMessage.textContent= "No user found!";
    } else {
        displayMessage.textContent= "";
        showUsers(newUsers);
    }
})