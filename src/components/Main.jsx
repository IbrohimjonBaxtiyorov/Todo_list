import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PriorityButton from "./defaultButton";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "lucide-react";
import { deleteById } from "../request";

export default function Main({ data: { data }, dispach }) {
function handleClick  (id)  {
        dispach({ type: "BUTTON_CLICKED" ,payload :id }); 
      };
  return (
    <div className="flex flex-col gap-4">
      {data.map(({ title, priority, completed,id },index) => (
        <Card key={index} >
          <CardHeader>
            <CardTitle>{title}</CardTitle>

            <PriorityButton priority={priority} />

            <CardDescription>
              {completed ? "✅ Bajarildi" : "❌ Hali bajarilmagan"}
            </CardDescription>
          </CardHeader>

          <Button
            onClick={() => handleClick(id)}
            className="w-40 ml-6"
            variant="secondary"
          >
            O'chirish <DeleteIcon />{" "}
          </Button>
        </Card>
      ))}
    </div>
  );
}
