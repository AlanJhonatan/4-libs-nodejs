import { z } from 'zod'

const userSchema = z.object({
  name: z.string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 caracteres.'})
    .transform(name => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: 'Você precisa ser maior de idade. '})
})

type User = z.infer<typeof userSchema>

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user)

  console.log(name, age)
  
  return { name, age }
}

saveUserToDatabase({ name: 'Alan', age: 23 })