import IconChevronDown from 'Icons/IconChevronDown'

type Props = {}

const ScrollDown = ({}: Props) => (
  <span className="fixed bottom-4 rounded-full animate-bounce inset-x-2/4 w-10 h-10 bg-white flex items-center">
    <IconChevronDown />
  </span>
)

export default ScrollDown
