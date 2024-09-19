import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5DC] p-8">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border border-[#FFA500]">
        <SignUp
          appearance={{
            variables: {
              colorPrimary: '#FFA500', // Button color
              colorText: '#2F4F4F', // Text color
              colorBackground: 'white', // Background color of the sign-up component
              colorBorder: 'transparent', // Border color to avoid unwanted effects
            },
            elements: {
              formButtonPrimary: 'bg-[#FFA500] text-[#F5F5DC] border-none', // Primary button styling
              card: 'bg-white', // Ensuring the sign-up card has a white background
              formFieldLabel: 'text-[#2F4F4F]', // Ensure labels have the desired text color
              formFieldInput: 'border-[#FFA500] text-[#2F4F4F]', // Input fields with appropriate border and text color
              formButtonPrimary: 'bg-[#FFA500] text-[#F5F5DC] border-none', // Primary button styling
            },
          }}
        />
      </div>
    </div>
  )
}
