# node.js_based_text_indexer
Node.js based app to upload text/pdf file and search text, phrase suggestions from indexed data.

What is it ?
Text Search engine which takes text files, html , Pdf files as input and 
later on user can use its api's to search document having given text/phrase/string.
It can be used to look for text/phrase/string in the list of documents.

APIs List
URL: 
/index 
Description:
Upload HTML/text/pdf at this endpoint to index data into engine for searching

URL :
/index/search/:text
Description:
This api takes in texts input and returns list of documents (indexed) containd that text.

URL :
/index/suggestions/:text
Description:
This api returns possible suggestions to complete the sentence. Suggestion is given using the indexed data.
