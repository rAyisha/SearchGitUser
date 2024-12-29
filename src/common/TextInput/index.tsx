import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type inputProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  color?: string;
  fontSize?: number;
  fontWeight?: any;
  textColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: any;
  error?: any;
  icon?: React.ReactNode;
  onIconPress?: () => void;
  readOnly?: boolean;
  keyboardType?: any;
  required?: boolean;
  secureTextEntry?: boolean;  
};

const InputText: React.FC<inputProps> = ({
  value,
  onChangeText,
  color = '#550000',
  fontSize = 16,
  fontWeight = '400',
  placeholder,
  placeholderTextColor = 'grey',
  style,
  error,
  icon = null,
  onIconPress = () => {},
  readOnly = false,
  keyboardType = 'default',
  required = false,
  secureTextEntry = false, 
}) => {
  return (
    <View style={style}>
      <View style={styles.inputIconWrapper}>
        {!value?.length && (
          <View style={styles.placeholderContainer}>
            <Text style={{ color: placeholderTextColor, fontSize }}>
              {placeholder}
            </Text>
            {required && <Text style={styles.requiredIcon}>*</Text>}
          </View>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{ color, fontSize, fontWeight, flex: 1 }}
          readOnly={readOnly}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry} 
          
        />
        {icon && (
          <TouchableOpacity onPress={onIconPress} disabled={readOnly}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View>
          <Text style={{ color: 'red', marginVertical: 4 }}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    position: 'relative',
    elevation: 4,
    borderWidth:0.6,
    borderColor:'#550000'
  },
  placeholderContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 20,
  },
  requiredIcon: {
    color: 'red',
  },
});
