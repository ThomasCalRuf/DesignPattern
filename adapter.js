let monImage = (function() {
    
    let maphotoprivee = "image.png";
    
    function afficheImagePrivee() {
        console.log(maphotoprivee);
    }
    
    return {
        afficheImage: function(source, x, y) {
            console.log(`Voici mon image sa source : ${source}, en x: ${x}, en y: ${y}`);
        },
        mavariablePublique: "test.png"
    };
})();


console.log(monImage.mavariablePublique); 

monImage.afficheImage("image.jpeg", 10, 10);