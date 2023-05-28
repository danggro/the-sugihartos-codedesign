import Container from "../Container";
import Project1 from "@/public/projects/project-1.png";
import Project2 from "@/public/projects/project-2.png";
import Project3 from "@/public/projects/project-3.png";
import Project4 from "@/public/projects/project-4.png";
import Project5 from "@/public/projects/project-5.png";
import Project6 from "@/public/projects/project-6.png";
import TitlePage from "../TitlePage";
import ListProject from "./ListProject";
import CardProject from "./CardProject";
import { useState } from "react";
import Modal from "./Modal";

export default function Projects() {
  const [modal, setModal] = useState("");

  const onClose = (e) => {
    if (e.target === e.currentTarget) {
      setModal("");
    }
  };
  return (
    <main className="pt-[93px] pb-[168px]">
      <Container>
        <div className="flex">
          <div className="relative w-5/12">
            <TitlePage>Projects</TitlePage>
            <p className="text-white/60 text-lg leading-[30px] mt-12 mb-11">
              Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya
              buat.
            </p>
            <ul className="space-y-[18px]">
              <ListProject active>Semua Kategori</ListProject>
              <ListProject>UI Design</ListProject>
              <ListProject>Web Development</ListProject>
              <ListProject>Mobile Development</ListProject>
            </ul>
          </div>
          <div className="flex flex-wrap w-7/12 text-center gap-x-[19px] gap-y-6">
            <CardProject
              src={Project1}
              alt="Project1"
              title="Login Page UI Design"
              ctg="ui design"
              onClick={() => {
                setModal("Project1");
              }}
            />
            {modal === "Project1" ? (
              <Modal src={Project1} alt="Project1" onClose={onClose} />
            ) : null}
            <CardProject
              src={Project2}
              alt="Project2"
              title="Landing Page"
              ctg="web development"
              onClick={() => {
                setModal("Project2");
              }}
            />
            {modal === "Project2" ? (
              <Modal src={Project2} alt="Project1" onClose={onClose} />
            ) : null}

            <CardProject
              src={Project3}
              alt="Project3"
              title="Landing Page"
              ctg="web development"
              onClick={() => {
                setModal("Project3");
              }}
            />
            {modal === "Project3" ? (
              <Modal src={Project3} alt="Project1" onClose={onClose} />
            ) : null}

            <CardProject
              src={Project4}
              alt="Project4"
              title="Login Page UI Design"
              ctg="ui design"
              onClick={() => {
                setModal("Project4");
              }}
            />
            {modal === "Project4" ? (
              <Modal src={Project4} alt="Project1" onClose={onClose} />
            ) : null}

            <CardProject
              src={Project5}
              alt="Project5"
              title="Mobile App"
              ctg="mobile development"
              onClick={() => {
                setModal("Project5");
              }}
            />
            {modal === "Project5" ? (
              <Modal src={Project5} alt="Project1" onClose={onClose} />
            ) : null}

            <CardProject
              src={Project6}
              alt="Project6"
              title="Login Page UI Design"
              ctg="mobile development"
              onClick={() => {
                setModal("Project6");
              }}
            />
            {modal === "Project6" ? (
              <Modal src={Project6} alt="Project1" onClose={onClose} />
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
