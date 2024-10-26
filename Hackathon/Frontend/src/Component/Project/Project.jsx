import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';

const Project = () => {
    const [projects, setProjects] = useState([]);

    const fetchProject = async () => {
        try {
            const response = await fetch(SummaryApi.ProjectFetch.url, {
                method: SummaryApi.ProjectFetch.method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            if (result.success) {
                setProjects(result.project);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProject();
    }, []);

    const handleSignup = async (project) => {
        try {
            const response = await fetch(SummaryApi.UserProjectSignUp.url, {
                method: SummaryApi.UserProjectSignUp.method,
                body: JSON.stringify(project),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })

            const result = await response.json();
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (err) {
            console.log(err);
            toast.error('Internal Server Error');
        }
    }


    return (
        <div className={styles.projectContainer}>
            <h1>Projects</h1>
            <table className={styles.projectTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Total Sign Ups</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.totalSignUp}</td>
                            <td>
                                <button
                                    className={styles.signupButton}
                                    onClick={() => handleSignup(project)}
                                >
                                    Sign Up
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Project;
