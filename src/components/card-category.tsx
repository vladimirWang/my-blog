import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/app/blog/utils";

export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Card className="w-[350px] h-[290px] shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="">{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
}
