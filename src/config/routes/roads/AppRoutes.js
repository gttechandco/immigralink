import { HomePage, ContactsPage, ProcessesPage, TeamPage, FAQPage, LoginPage, ServicesPage, SignUpPage, AboutPage, ManagerDashboard } from "../../../pages";
import { ManagerLoginForm } from "../../../components";

const routes = [
    {
        path: "/",
        layout: "main",
        component: HomePage,
        childrenTitle: "Accueil",
    },
    {
        path: "/contacts",
        layout: "second",
        component: ContactsPage,
        childrenTitle: "Contacts",
    },
    {
        path: "/about",
        layout: "second",
        component: AboutPage,
        childrenTitle: "A propos de nous",
    },
    {
        path: "/processes",
        layout: "second",
        component: ProcessesPage,
        childrenTitle: "Processus",
    },
    {
        path: "/team",
        layout: "second",
        component: TeamPage,
        childrenTitle: "Equipe",
    },
    {
        path: "/faq",
        layout: "second",
        component: FAQPage,
        childrenTitle: "Foire Aux Questions",
    },
    {
        path: "/login",
        layout: "second",
        component: LoginPage,
        childrenTitle: "Se Connecter",
    },
    {
        path: "/sign-up",
        layout: "second",
        component: SignUpPage,
        childrenTitle: "S'inscrire",
    },
    {
        path: "/services",
        layout: "second",
        component: ServicesPage,
        childrenTitle: "Services",
    },
    /** Manager Pages */
    {
        path: "/website-management/admin/welcome",
        layout: "admin",
        component: ManagerDashboard,
    },
    {
        path: "/website-management/admin/login",
        layout: "form",
        component: ManagerLoginForm,
    },
];

export default routes;