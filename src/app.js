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
            url = this.cleanPhrase(phrase)
            
              Object.keys(options).forEach(option => {
                if (option) {
                    url += `_${option}-${options[option]}_`
                }
            })

        } else {
            url = this.cleanPhrase(phrase)
        }

        return url
    },
    /**
     * 
     * @param {String} phrase
     *
     * Method to default clean of phrase 
     */
    cleanPhrase(phrase) {
        // transform to lower case
        phrase = phrase.toLowerCase()
        // remove characters like [` ´ ~ ç]
        phrase = phrase.normalize("NFD").replace(/[\u0300-\u036f-\u00E7-\u223C-\u2038]/g, "")
        phrase = phrase.trim()
        // replace white spaces with -
        phrase = phrase.replace(/[" "]/g, "-")

        return phrase
    }
}