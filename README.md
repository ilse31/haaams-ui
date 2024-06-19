# Haaams-Ui

this is some component from ilse31

list component support

- Button [DONE]
- Forms Input [DONE]
- Text [DONE]
- Toast
- Table

This component on development, i will create the storybook soon

## Usage/Examples

```javascript
import "haaams-ui/dist/style.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Text className='text-white' variant='h1'>
        Vite + React
      </Text>
      <Button size='lg' variant='ghost' onClick={Fn()}>
        count is {count}
      </Button>
    </>
  );
}
```
