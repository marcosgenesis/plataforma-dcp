import Link from "next/link";
import React from "react";
import { Breadcrumb, BreadCrumbsContainer } from "./styles";

interface Breadcrumb {
  path: string;
  label: string;
  active?: boolean;
}

interface BreadCrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadcrumbs }) => {
  return (
    <BreadCrumbsContainer>
      {breadcrumbs.map((i, index) => (
        <>
          <Link key={index} href={i.path}>
            <Breadcrumb active={i.active}>{i.label}</Breadcrumb>
          </Link>
          {index !== breadcrumbs.length - 1 && <p>/</p>}
        </>
      ))}
    </BreadCrumbsContainer>
  );
};

export default BreadCrumbs;
