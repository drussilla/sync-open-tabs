function isError(result) {
	debug(result.status);
	if (result.status == opera.link.response.Unauthorized ||
		result.status == opera.link.response.InternalServerError) {
		debug("Error status: " + result.status + " Error response: " + result.response);
		return true;
	}
	return false;
}