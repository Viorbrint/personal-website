import { Router, Request, Response } from "express";

interface Data {
  projects: Project[];
}

interface Project {
  name: string;
  summary: string;
  tags: string[];
}

const data: Data = {
  projects: [
    {
      name: "Forms",
      summary:
        "A customizable forms web application built with .NET Blazor Server. Create, manage, and analyze form templates with user authentication, admin controls, and Salesforce integration.",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
    {
      name: "BookStoreTester",
      summary: "Something",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
    {
      name: "BookStoreTester",
      summary: "Something",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
  ],
};

export const appRouter = Router();

appRouter.get("/", (_: Request, res: Response) => {
  res.render("index", data);
});

appRouter.get("/stats", (_: Request, res: Response) => {
  res.render("stats", { commits: 3 });
});
