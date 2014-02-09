    //Get's the sample from the server defined in sixpack.js, chooses the design based on the servers response 
    function getSample() {
        window.session = new sixpack.Session();
        var d = new Date();
        window.m = d.getMonth();
        session.participate("month" + m, ['a', 'b', 'c'], function (err, res) {
            if (err) throw err;
            // for designs available 
            var designs = ['a', 'b', 'c'];
            for (var i = 0; i < designs.length; i++) {
                if (res.alternative['name'] === designs[i]) {
                    loadDesign(designs[i]);
                    break;
                    return designs[i];
                }
            }
        });
    }

    function changeImage(image) {
        document.getElementById("big_guy").src = image; 
    }

    function jumpToTop() {
    window.scrollTo(0,0);
    }


    function convert() {
        session.convert("month" + m, function (err, res) {
            if (err) throw err;
        });
    }


