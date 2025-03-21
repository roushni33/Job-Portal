import React from 'react'
import Navbar from '../shared/navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"


const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto '>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10 '>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder="Roushni"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="kumariroushni12@gmail.com"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="Number"
                            placeholder="91XXXXXXXX"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="email"
                            placeholder="kumariroushni12@gmail.com"
                        />
                    </div>

                    <div className='flex items-center justify-between '>
                        
                        <RadioGroup defaultValue="Student" className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2 ">
                                <Input 
                                   type="radio"
                                   name="role"
                                   value="student"
                                   className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="Recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup