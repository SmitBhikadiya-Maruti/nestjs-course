import { empty } from "rxjs";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Meeting } from "./meetings.entity";
import { Task } from "./task.entity";


@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(()=> Employee, emp=>emp.directReports, { onDelete: 'SET NULL' })
    manager: Employee;

    @OneToMany(()=> Employee, emp=>emp.manager)
    directReports: Employee[]

    @OneToOne(()=>ContactInfo, contactInfo => contactInfo.employee)
    contactInfo:ContactInfo

    @OneToMany(()=>Task, task => task.employee)
    tasks: Task[]

    @ManyToMany(()=>Meeting, meet=>meet.attendees)
    @JoinTable()
    meetings: Meeting[]
}