/**
 * @PageObject LisRest description
 */
SeSPageObject("LisRest");

/**  
 * Perform a login action.  
 *   
 * @param {String} username - The username for login.  
 * @param {String} password - The password for login.  
 *   
 * @returns {Boolean} - Returns true if the login was successful, otherwise false.  
 */  
function LisRest_DoLogin(/**string*/username, /**string*/ password)
{
	global.restToken = null;
	var /**RESTRequest*/ LisRest_Login = SeS('LisRest_Login');
	LisRest_Login.SetParameter('organization', Tester.GetParam("Organization"));
	LisRest_Login.SetParameter('username', username);
	LisRest_Login.SetParameter('password', password);
	LisRest_Login._DoExecute();
	return global.restToken != null;
}

/**
 * Perform a create author action.
 * 
 * @param {String} name - The name of the author.
 * @param {Number} age - The age of the author.
 * 
 * @returns {Number|Boolean} - Returns author id if the author was successfully created, otherwise false.
 */
function LisRest_DoCreateAuthor(/**string*/ name, /**number*/ age) 
{
	if (typeof name !== 'string' || typeof age !== 'number') 
	{
		Tester.Message('Invalid input types for LisRest_DoCreateAuthor');
		return false;
	}
	
	var /**RESTRequest*/ request = SeS('LisRest_CreateAuthor');
	
	request.SetParameter('name', name);
	request.SetParameter('age', age);
	
	request._DoExecute();
	
	var isError = request.GetResponseIsErrorStatus();
	
	if (isError)
	{
		Tester.Message(request.GetResponseBodyText());
	}
	
	return isError == false ? request.GetResponseBodyObject().id : false;
}

/**
 * Perform a delete author action.
 * 
 * @param {Number} id - The ID of the author to delete.
 * 
 * @returns {Boolean} - Returns true if the author was successfully deleted, otherwise false.
 */
function LisRest_DoDeleteAuthor(/**number*/ id) 
{
	// Ensure the input is a number
	if (typeof id !== 'number') {
		Tester.Message('Invalid input type for LisRest_DoDeleteAuthor');
		return false;
	}
	
	const request = SeS('LisRest_DeleteAuthor');

	request.SetParameter('id', id);
	
	request._DoExecute();
	
	var isError = request.GetResponseIsErrorStatus();
	
	if (isError)
	{
		Tester.Message(request.GetResponseBodyText());
	}
	
	return isError == false;
}

/**
 * Get all authors in the system.
 * 
 * @returns {Array|Boolean} - An array of author objects on success, otherwise false.
 */
function LisRest_DoGetAuthors()
{
	var request = SeS('LisRest_GetAuthors');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Update an existing author.
 * 
 * @param {Number} id - The ID of the author to update.
 * @param {String} [name] - The new name of the author.
 * @param {Number} [age] - The new age of the author.
 * 
 * @returns {Object|Boolean} - The updated author object on success, otherwise false.
 */
function LisRest_DoUpdateAuthor(/**number*/ id, /**string*/ name, /**number*/ age)
{
	if (typeof id !== 'number') {
		Tester.Message('Invalid input for LisRest_DoUpdateAuthor: id must be a number.');
		return false;
	}

	var request = SeS('LisRest_UpdateAuthor');
	request.SetParameter('id', id);
	if (name !== undefined) request.SetParameter('name', name);
	if (age !== undefined) request.SetParameter('age', age);
	
	request._DoExecute();

	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get the total number of authors.
 * 
 * @returns {Number|Boolean} - The count of authors on success, otherwise false.
 */
function LisRest_DoCountAuthors()
{
	var request = SeS('LisRest_CountAuthors');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get a single author by their ID or name.
 * 
 * @param {Number|String} idOrName - The ID or name of the author to retrieve.
 * 
 * @returns {Object|Boolean} - The author object on success, otherwise false.
 */
function LisRest_DoGetAuthor(/**number|string*/ idOrName)
{
	var request = SeS('LisRest_GetAuthor');
	request.SetParameter('idOrName', idOrName);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Find authors by a partial name match.
 * 
 * @param {String} namePart - The partial name to search for.
 * 
 * @returns {Array|Boolean} - An array of matching author objects on success, otherwise false.
 */
function LisRest_DoFindAuthor(/**string*/ namePart)
{
	var request = SeS('LisRest_FindAuthor');
	request.SetParameter('namePart', namePart);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get all books in the system.
 * 
 * @returns {Array|Boolean} - An array of book objects on success, otherwise false.
 */
function LisRest_DoGetBooks()
{
	var request = SeS('LisRest_GetBooks');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Create a new book.
 * 
 * @param {String} name - The name of the book.
 * @param {Number} author - The ID of the author.
 * @param {Number} genre - The ID of the genre.
 * @param {String} [dateAdded] - The ISO 8601 date-time string.
 * @param {Boolean} [outOfPrint] - Whether the book is out of print.
 * 
 * @returns {Number|Boolean} - The ID of the newly created book on success, otherwise false.
 */
function LisRest_DoCreateBook(/**string*/ name, /**number*/ author, /**number*/ genre, /**string*/ dateAdded, /**boolean*/ outOfPrint)
{
	if (typeof name !== 'string' || typeof author !== 'number' || typeof genre !== 'number') {
		Tester.Message('Invalid input for LisRest_DoCreateBook: name, author, and genre are required.');
		return false;
	}
	
	var request = SeS('LisRest_CreateBook');
	request.SetParameter('name', name);
	request.SetParameter('author', author);
	request.SetParameter('genre', genre);
	if (dateAdded !== undefined) request.SetParameter('dateAdded', dateAdded);
	if (outOfPrint !== undefined) request.SetParameter('outOfPrint', outOfPrint);
	
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject().id;
}

/**
 * Update an existing book.
 * 
 * @param {Number} id - The ID of the book to update.
 * @param {String} [name] - The new name of the book.
 * @param {Number} [author] - The new author ID.
 * @param {Number} [genre] - The new genre ID.
 * @param {String} [dateAdded] - The new date added string.
 * @param {Boolean} [outOfPrint] - The new out of print status.
 * 
 * @returns {Object|Boolean} - The updated book object on success, otherwise false.
 */
function LisRest_DoUpdateBook(/**number*/ id, /**string*/ name, /**number*/ author, /**number*/ genre, /**string*/ dateAdded, /**boolean*/ outOfPrint)
{
	if (typeof id !== 'number') {
		Tester.Message('Invalid input for LisRest_DoUpdateBook: id must be a number.');
		return false;
	}

	var request = SeS('LisRest_UpdateBook');
	request.SetParameter('id', id);
	if (name !== undefined) request.SetParameter('name', name);
	if (author !== undefined) request.SetParameter('author', author);
	if (genre !== undefined) request.SetParameter('genre', genre);
	if (dateAdded !== undefined) request.SetParameter('dateAdded', dateAdded);
	if (outOfPrint !== undefined) request.SetParameter('outOfPrint', outOfPrint);

	request._DoExecute();

	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get the total number of books.
 * 
 * @returns {Number|Boolean} - The count of books on success, otherwise false.
 */
function LisRest_DoCountBooks()
{
	var request = SeS('LisRest_CountBooks');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get a single book by its ID or name.
 * 
 * @param {Number|String} idOrName - The ID or name of the book to retrieve.
 * 
 * @returns {Object|Boolean} - The book object on success, otherwise false.
 */
function LisRest_DoGetBook(/**number|string*/ idOrName)
{
	var request = SeS('LisRest_GetBook');
	request.SetParameter('idOrName', idOrName);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Find books by a partial name match.
 * 
 * @param {String} namePart - The partial name to search for.
 * 
 * @returns {Array|Boolean} - An array of matching book objects on success, otherwise false.
 */
function LisRest_DoFindBook(/**string*/ namePart)
{
	var request = SeS('LisRest_FindBook');
	request.SetParameter('namePart', namePart);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Delete a book from the system.
 * 
 * @param {Number} id - The ID of the book to delete.
 * 
 * @returns {Boolean} - True on successful deletion, otherwise false.
 */
function LisRest_DoDeleteBook(/**number*/ id)
{
	if (typeof id !== 'number') {
		Tester.Message('Invalid input type for LisRest_DoDeleteBook');
		return false;
	}
	
	var request = SeS('LisRest_DeleteBook');
	request.SetParameter('id', id);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return true;
}

/**
 * Get all genres in the system.
 * 
 * @returns {Array|Boolean} - An array of genre objects on success, otherwise false.
 */
function LisRest_DoGetGenres()
{
	var request = SeS('LisRest_GetGenres');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Create a new genre.
 * 
 * @param {String} name - The name of the new genre.
 * 
 * @returns {Number|Boolean} - The ID of the new genre on success, otherwise false.
 */
function LisRest_DoCreateGenre(/**string*/ name)
{
	if (typeof name !== 'string') {
		Tester.Message('Invalid input type for LisRest_DoCreateGenre');
		return false;
	}

	var request = SeS('LisRest_CreateGenre');
	request.SetParameter('name', name);
	request._DoExecute();

	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject().id;
}

/**
 * Get the total number of genres.
 * 
 * @returns {Number|Boolean} - The count of genres on success, otherwise false.
 */
function LisRest_DoCountGenres()
{
	var request = SeS('LisRest_CountGenres');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get a single genre by its ID or name.
 * 
 * @param {Number|String} idOrName - The ID or name of the genre to retrieve.
 * 
 * @returns {Object|Boolean} - The genre object on success, otherwise false.
 */
function LisRest_DoGetGenre(/**number|string*/ idOrName)
{
	var request = SeS('LisRest_GetGenre');
	request.SetParameter('idOrName', idOrName);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Delete a genre from the system.
 * 
 * @param {Number} id - The ID of the genre to delete.
 * 
 * @returns {Boolean} - True on successful deletion, otherwise false.
 */
function LisRest_DoDeleteGenre(/**number*/ id)
{
	if (typeof id !== 'number') {
		Tester.Message('Invalid input type for LisRest_DoDeleteGenre');
		return false;
	}
	
	var request = SeS('LisRest_DeleteGenre');
	request.SetParameter('id', id);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return true;
}

/**
 * Keep the current session alive.
 * 
 * @returns {Boolean} - True if the session is still active, otherwise false.
 */
function LisRest_DoKeepAlive()
{
	var request = SeS('LisRest_KeepAlive');
	request._DoExecute();
	
	return !request.GetResponseIsErrorStatus();
}

/**
 * End the current session.
 * 
 * @returns {Boolean} - True on successful logout, otherwise false.
 */
function LisRest_DoLogout()
{
	var request = SeS('LisRest_Logout');
	request._DoExecute();
	global.restToken = null;
	
	return !request.GetResponseIsErrorStatus();
}

/**
 * Get all users in the system.
 * 
 * @returns {Array|Boolean} - An array of user objects on success, otherwise false.
 */
function LisRest_DoGetUsers()
{
	var request = SeS('LisRest_GetUsers');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Create a new user.
 * 
 * @param {String} username - The username.
 * @param {String} password - The password.
 * @param {String} name - The full name.
 * @param {Boolean} active - The active status.
 * @param {Number} permission - The permission level (0-3).
 * 
 * @returns {Object|Boolean} - The created user object on success, otherwise false.
 */
function LisRest_DoCreateUser(/**string*/ username, /**string*/ password, /**string*/ name, /**boolean*/ active, /**number*/ permission)
{
	if (typeof username !== 'string' || typeof password !== 'string' || typeof name !== 'string' || typeof active !== 'boolean' || typeof permission !== 'number') {
		Tester.Message('Invalid input types for LisRest_DoCreateUser.');
		return false;
	}
	
	var request = SeS('LisRest_CreateUser');
	request.SetParameter('username', username);
	request.SetParameter('password', password);
	request.SetParameter('name', name);
	request.SetParameter('active', active);
	request.SetParameter('permission', permission);
	
	request._DoExecute();

	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Get the organization ID for this API.
 * 
 * @returns {String|Boolean} - The organization ID string on success, otherwise false.
 */
function LisRest_DoGetOrg()
{
	var request = SeS('LisRest_GetOrg');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyText();
}

/**
 * Perform a quick self-test to check if the endpoint is alive.
 * 
 * @returns {String|Boolean} - The test response string on success, otherwise false.
 */
function LisRest_DoSelfTest()
{
	var request = SeS('LisRest_SelfTest');
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyText();
}

/**
 * Get a single user by their username.
 * 
 * @param {String} username - The username of the user to retrieve.
 * 
 * @returns {Object|Boolean} - The user object on success, otherwise false.
 */
function LisRest_DoGetUser(/**string*/ username)
{
	if (typeof username !== 'string') {
		Tester.Message('Invalid input for LisRest_DoGetUser: username must be a string.');
		return false;
	}
	
	var request = SeS('LisRest_GetUser');
	request.SetParameter('username', username);
	request._DoExecute();
	
	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}

/**
 * Update an existing user's information.
 * 
 * @param {String} username - The username of the user to update (cannot be changed).
 * @param {String} [password] - The new password.
 * @param {String} [name] - The new full name.
 * @param {Boolean} [active] - The new active status.
 * @param {Number} [permission] - The new permission level.
 * 
 * @returns {Object|Boolean} - The updated user object on success, otherwise false.
 */
function LisRest_DoUpdateUser(/**string*/ username, /**string*/ password, /**string*/ name, /**boolean*/ active, /**number*/ permission)
{
	if (typeof username !== 'string') {
		Tester.Message('Invalid input for LisRest_DoUpdateUser: username must be a string.');
		return false;
	}
	
	var request = SeS('LisRest_UpdateUser');
	request.SetParameter('username', username);
	if (password !== undefined) request.SetParameter('password', password);
	if (name !== undefined) request.SetParameter('name', name);
	if (active !== undefined) request.SetParameter('active', active);
	if (permission !== undefined) request.SetParameter('permission', permission);

	request._DoExecute();

	if (request.GetResponseIsErrorStatus()) {
		Tester.Message(request.GetResponseBodyText());
		return false;
	}
	
	return request.GetResponseBodyObject();
}