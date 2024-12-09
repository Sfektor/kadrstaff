import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactsPage,
  PolicyPage,
  QuestionAnswerPage,
  VacanciesPage,
} from "../pages";

export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/questions" element={<QuestionAnswerPage />} />
      <Route path="/vacancies" element={<VacanciesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/policy" element={<PolicyPage />} />
    </Routes>
  );
};
