# Javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.
This is designed to approve how to create custom javascript actions by yourself.

## Input

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: Samsam
```
