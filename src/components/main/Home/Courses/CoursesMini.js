import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CoursesMini.css";
import imagecard from "../../../../assets/images/ajouter-image.jpg";

const CoursesMini = () => {
    const [sectionTitle, setSectionTitle] = useState("");
    const [sectionDescription, setSectionDescription] = useState("");
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    // Some Functions
    function redirectTo(url) {
        navigate(url)
    }
    
    useEffect(() => {
        /*const fetchCourses = async () => {
            try {
                const getCourses = await fetch().then();
                setCourses(getCourses.body);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        fetchCourses();*/
        setCourses(courses);
        setSectionTitle(sectionTitle);
        setSectionDescription(sectionDescription);
    }, [courses, sectionTitle, sectionDescription]);

    return (
        <section className="courses justify-content-center align-items-center">
            <div className="section-title">
                <h2>
                    {sectionTitle !== "" ? sectionTitle : "Ajoutez un titre de section (SECTION PROCESSUS)"}
                </h2>
            </div>

            <div className="row justify-content-center">
            {courses === "" ? (
                courses.map((course, index) => {
                    return (
                        <Card key={index} className="courses-cards">
                            <Card.Header className="card-header">
                                <img src={course.imageurl} alt="course" className="card-img-top"/>
                                <CardTitle className="card-title">
                                    {course.title}
                                </CardTitle>
                            </Card.Header>

                            <Card.Body className="card-body">
                                <Card.Text className="card-description">
                                    {course.description}
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="card-footer">
                                <Button onClick={() => redirectTo(`processes/${course.id}/details`)}>
                                    Voir les détails
                                </Button>
                            </Card.Footer>
                        </Card>
                    )
                })
            ) : (
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <Card className="courses-cards">
                            <Card.Header className="card-header">
                                <img src={imagecard} alt="course" className="card-img-top"/>
                                <CardTitle className="card-title">
                                    Etudier au Canada
                                </CardTitle>
                            </Card.Header>

                            <Card.Body className="card-body">
                                <Card.Text className="card-description">
                                    Vous souhaitez continuer vos études au Canada, béneficier d'une procédure et d'un suivi adéquat
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="card-footer">
                                <Button onClick={() => redirectTo("processes/canada-travel/details")}>
                                    Voir les détails
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col">
                        <Card className="courses-cards">
                            <Card.Header className="card-header">
                                <img src={imagecard} alt="course" className="card-img-top"/>
                                <CardTitle className="card-title">
                                    Etudier au Canada
                                </CardTitle>
                            </Card.Header>

                            <Card.Body className="card-body">
                                <Card.Text className="card-description">
                                    Vous souhaitez continuer vos études au Canada, béneficier d'une procédure et d'un suivi adéquat
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="card-footer">
                                <Button onClick={() => redirectTo("processes/canada-travel/details")}>
                                    Voir les détails
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col">
                        <Card className="courses-cards">
                            <Card.Header className="card-header">
                                <img src={imagecard} alt="course" className="card-img-top"/>
                                <CardTitle className="card-title">
                                    Etudier au Canada
                                </CardTitle>
                            </Card.Header>

                            <Card.Body className="card-body">
                                <Card.Text className="card-description">
                                    Vous souhaitez continuer vos études au Canada, béneficier d'une procédure et d'un suivi adéquat
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="card-footer">
                                <Button onClick={() => redirectTo("processes/canada-travel/details")}>
                                    Voir les détails
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            )}
            </div>
        </section>
    );
};

export default CoursesMini;