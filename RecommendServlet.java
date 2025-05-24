import model.User;
import model.Song;
import service.SongDatabase;
import service.RecommendationService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/recommend")
public class RecommendServlet extends HttpServlet {

    // Handles POST request from index.html form
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Get name and mood from form
        String name = request.getParameter("name");
        String mood = request.getParameter("mood");

        // Create User object
        User user = new User(name, mood);

        // Set up database and recommender
        SongDatabase db = new SongDatabase();
        RecommendationService recommender = new RecommendationService(db);

        // Get recommendations
        List<Song> recommendations = recommender.recommend(user);

        // Pass recommendations to JSP
        request.setAttribute("recommendations", recommendations);
        request.setAttribute("userName", name);
        request.setAttribute("userMood", mood);

        // Forward to result.jsp
        RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
        dispatcher.forward(request, response);
    }

    // Optional: Redirect GET requests back to the form
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("index.html");
    }
}
