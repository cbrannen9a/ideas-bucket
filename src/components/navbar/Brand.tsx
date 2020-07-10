import React from "react";
import Title from "../elements/title";
import { APP_TITLE } from "../../constants";

const Brand: React.FC<Props> = () => <Title title={APP_TITLE} />;

interface Props {}

export default Brand;
