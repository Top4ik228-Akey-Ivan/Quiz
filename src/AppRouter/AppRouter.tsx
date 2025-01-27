import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import QuizPage from "../pages/QuizPage/QuizPage";
import { questions, Quizes } from "../consts/quizNames";

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/:name' element={<QuizPage questions={questions} quizes={Quizes}/>}/>
            <Route path='*' element={<WelcomePage/>}/>
        </Routes>
    );
}
 
export default AppRouter;