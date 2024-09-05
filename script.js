function loadContent(content) {
    const rightContent = document.getElementById('right-content');
    if(content === 'about') {
        rightContent.innerHTML = `
            <h2>About Us</h2>
            <img src="https://www.yourimageurl.com/aboutus.jpg" alt="About Us Image">
            <p>Welcome to our college! Here are some of our achievements:</p>
            <ul>
                <li>Accredited twice by NAAC with 'A' Grade</li>
                <li>Ranked among the top engineering colleges</li>
                <li>State-of-the-art infrastructure</li>
                <li>Excellent placement record</li>
            </ul>
        `;
    } else {
        // rightContent.innerHTML = <h2>${content}</h2><p>Content for ${content}</p>;
    }
}
