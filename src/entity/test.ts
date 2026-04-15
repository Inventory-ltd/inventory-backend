import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: "test" })
export class Test {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}