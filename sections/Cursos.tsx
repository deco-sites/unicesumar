import { type Curso } from "site/apps/types.ts";

export interface Props {
    cursos: Curso[];
}

export default function Cursos({
    cursos
}: Props) {
    return (
        <ul class="flex flex-col gap-2 p-2">
            {cursos.map(curso => (
                <li>- {curso.ecur_nome}</li>
            ))}
        </ul>
    );
}