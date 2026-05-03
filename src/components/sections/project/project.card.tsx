import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

interface Iprops {
    imgPath: string;
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    date?: string;
    onClick?: () => void;
}

function ProjectCard(props: Iprops) {
    return (
        <Card
            className="project-card-view"
            onClick={props.onClick}
            style={{ cursor: props.onClick ? 'pointer' : 'default' }}
        >
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt="card-img"
                style={{ height: 215 }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>
                {props.date && (
                    <small className="text-muted" style={{ marginBottom: '4px' }}>{props.date}</small>
                )}
                <div className="d-flex flex-column justify-content-between h-100">
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {props.description}
                    </Card.Text>
                    <div>
                        <Button
                            variant="primary"
                            href={props.githubLink}
                            target="_blank"
                            onClick={e => e.stopPropagation()}
                        >
                            <BsGithub /> &nbsp;
                            {'Source'}
                        </Button>

                        <Button
                            variant="primary"
                            href={props.demoLink || ''}
                            target="_blank"
                            style={{
                                marginLeft: '10px',
                                opacity: props.demoLink ? 1 : 0.5,
                                pointerEvents: props.demoLink ? 'auto' : 'none',
                            }}
                            disabled={!props.demoLink}
                            onClick={e => e.stopPropagation()}
                        >
                            <CgWebsite /> &nbsp;
                            {'Demo'}
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
