<%@ page import="java.util.*, model.Song" %>
<html>
<head><title>Recommendations</title></head>
<body>
  <h2>Recommended Songs:</h2>
  <ul>
    <%
      List<Song> songs = (List<Song>) request.getAttribute("recommendations");
      for (Song song : songs) {
        out.println("<li>" + song.getTitle() + " - " + song.getArtist() + "</li>");
      }
    %>
  </ul>
  <a href="index.html">Back</a>
</body>
</html>
