# Bottom Sheet Component

This bottom sheet component includes the ability to customise what is inside the sheet.

## Basic Example

```
<BottomSheet
    isVisable={isVisable}
    close={handleClose}
>
    {Children}
</BottomSheet>
```

## API

isVisable

> A boolean used to determine is the bottom sheet is visable or not

close

> A function used to close the the bottom sheet when it is open

{Children}

> The child component that will be rendered inside of the parent component
