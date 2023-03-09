const roal = {
    version: function () {
        return ("roalJS, version 1.1.0 (Date: 23/03/09)");
    },

    createLS: function (name, value) {
        localStorage.setItem(name, value)
        console.log("LocalStorage items has added, Name: " + name + " Value: " + value)
    },

    changeLS: function (name, value) {
        localStorage.setItem(name, value)
        console.log("LocalStorage items has edited, Name: " + name + " Value: " + value)
    },

    removeLS: function (name) {
        localStorage.removeItem(name);
        console.log("LocalStorage items has removed, Name: " + name)
    },

    createSS: function (name, value) {
        sessionStorage.setItem(name, value)
        console.log("SessionStorage items has added, Name: " + name + " Value: " + value)
    },

    changeSS: function (name, value) {
        sessionStorage.setItem(name, value)
        console.log("SessionStorage items has edited, Name: " + name + " Value: " + value)
    },

    removeSS: function (name) {
        sessionStorage.removeItem(name);
        console.log("SessionStorage items has removed, Name: " + name)
    },

    onload: function (event) {
        document.addEventListener("DOMContentLoaded", event);
    },

    fullLoad: function (event) {
        window.addEventListener("load", event);
    },

    legacyLoad: function (event) {
        window.onload = event;
    },

    on: function (type, event) {
        document.addEventListener(type, event)
    },

    off: function (type, event) {
        document.removeEventListener(type, event)
    },

    random: function (max, integer) {
        if (integer) {
            return Math.random() * max;
        } else {
            return Math.floor(Math.random() * max);
        }
    },

    stringRandom: function (array) {
        var sort = array.sort(function () {
            return Math.random() - 0.5;
        }).join('')

        return sort;
    },

    arrayRandom: function (array) {
        var random = Math.floor(Math.random() * array.length);
        return array[random];
    },

    getDefault: function (element) {
        if (element.includes(".")) {
            var converted = element.replace(".", "")

            return document.getElementsByClassName(converted)[0]
        } else if (element.includes("#")) {
            var converted = element.replace("#", "")

            return document.getElementById(converted)
        } else {
            return document.getElementsByTagName(element)[0]
        }
    },

    getElement: function (element) {
        var result;


        if (element.includes(".")) {
            var converted = element.replace(".", "")

            result = document.getElementsByClassName(converted)[0]
        } else if (element.includes("#")) {
            var converted = element.replace("#", "")

            result = document.getElementById(converted)
        } else {
            result = document.getElementsByTagName(element)[0]
        }

        this.getElement.getText = result.innerText
        this.getElement.setText = function (text) {
            result.innerText(text)
        }

        this.getElement.on = function (type, event) {
            result.addEventListener(type, event)
        }
        this.getElement.off = function (type, event) {
            result.removeEventListener(type, event)
        }

        this.getElement.addClass = function (target) {
            result.classList.add(target)
        }
        this.getElement.removeClass = function (target) {
            result.classList.remove(target)
        }
        this.getElement.toggleClass = function (target) {
            result.classList.toggle(target)
        }
        this.getElement.checkClass = function (target) {
            return result.classList.contains(target)
        }

        this.getElement.hover = function (event) {
            result.addEventListener("mouseenter", event)

            result.addEventListener("mouseleave", () => {
                result.attributeStyleMap.clear()
            })
        }
        this.getElement.click = function (event) {
            result.addEventListener("click", event)
        }
        this.getElement.focus = function (event) {
            result.addEventListener("focus", event)
            result.addEventListener("blur", () => {
                result.attributeStyleMap.clear()
            })
        }

        this.getElement.animate = function (from, to, sec, completed) {
            result.animate([
                from,
                to
                , sec])

            setTimeout(completed, sec)
        }


        return this.getElement;
    }
}