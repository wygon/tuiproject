import { attractions } from "~/categories/attractions";
import AttractionItemCard from "./AttractionItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";

interface Props {
    search : string;
    activeCategory : string;
}

export default function AtractionComponent({ search, activeCategory } : Props) {

    const attractionList = useMemo(() => {
        let filteredList = attractions;
        if (activeCategory !== "") {
            filteredList = filteredList.filter(
                attraction => attraction.categories.includes(activeCategory))
        }
        if (search !== "") {
            filteredList = filteredList.filter(
                attraction =>
                    attraction.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                    attraction.country.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            }
        return filteredList.map((attraction) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <AttractionItemCard
                    key={attraction.id}
                    attraction={attraction}
                />
            </Col>
        ));
    }, [attractions, search, activeCategory]);

    return (
        <div className="mainpage-container">
            <Row>
                {attractionList}
            </Row>
        </div>
    );
}