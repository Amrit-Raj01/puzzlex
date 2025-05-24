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

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String mood = request.getParameter("mood");

        User user = new User(name, mood);
        SongDatabase db = new SongDatabase();
        RecommendationService recommender = new RecommendationService(db);

        List<Song> recommendations = recommender.recommend(user);

        request.setAttribute("recommendations", recommendations);
        request.setAttribute("userName", name);
        request.setAttribute("userMood", mood);

        RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
        dispatcher.forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("index.html");
    }
}
