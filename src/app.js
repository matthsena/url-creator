module.exports = {
    /**
     * 
     * @param {String} phrase = the phrase u want transform in a URL  
     * @param {Any} id = item id
     * 
     */
    generateURL(phrase, id) {

        let url
        // If user define any option
        if (id) {
            url = this.cleanPhrase(phrase)
            url += `_${id}_`

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
        // remove white spaces
        phrase = phrase.trim()
        phrase = phrase.replace(/\s\s+/g, " ")
        phrase = phrase.replace(/[" "]/g, "-")

        return phrase
    },
    /**
     * 
     * @param {String} url 
     * 
     * Method to extract Id from URL
     */
    extractId(url) {

        id = url.match(/\_(.*?)\_/g)
        id = id[0].replace(/[_]/g, "")
        return id
    }
}