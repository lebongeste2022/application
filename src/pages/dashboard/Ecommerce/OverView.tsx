import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';

// components
import OverViewItem from '../../../components/OverViewItem';

const OverView = () => {
    return (
        <Card>
            <Card.Body className="p-0">
                <div className="p-3">
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="arrow-none text-muted cursor-pointer">
                            <i className="uil uil-ellipsis-v"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="uil uil-refresh me-2"></i>Raffraichir
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-user-plus me-2"></i>Ajouter
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">
                                <i className="uil uil-exit me-2"></i>Quitter
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h5 className="card-title header-title mb-0">Aperçu</h5>
                </div>

                <OverViewItem stats={'121,000'} title={'Total Visiteurs'} icon={'users'} iconClass={'icon-md'} />
                <OverViewItem stats={'21,000'} title={'Totales des Produits Vues'} icon={'image'} iconClass={'icon-md'} />
                <OverViewItem
                    stats={'$21.5'}
                    title={'Revenue Par Visiteur'}
                    icon={'shopping-bag'}
                    iconClass={'icon-md'}
                />

                <Link to="#" className="p-2 d-block text-end">
                    Tout Voir <i className="uil-arrow-right"></i>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default OverView;
