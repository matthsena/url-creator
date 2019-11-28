module.exports = {
    /**
     * 
     * @param {String} phrase = the phrase u want transform in a URL  
     * @param {Object} options = options to this transform
     * 
     * options: {
     *      id: <Any>
     *      category: <String>
     *      maxLength: <Int>
     * }
     */
    generateURL(phrase, options) {
        
        let url
        // If user define any option
        if (options && options != {}) {
            url = null
        } else {
            url = phrase.toLowerCase()
            url = url.normalize("NFD").replace(/[\u0300-\u036f-\u00E7-\u223C-\u2038]/g, "")
            url = url.trim()
            url = url.replace(/[" "]/g, "-")
        }


        return url
    }
}