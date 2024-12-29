
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SvgSvgDrop from '../../assets/icons/SvgDrop';
import { colors } from '../../utility/colors';


type DropDownCommonProps = {
  data: { id: string; name: string }[]|any;
  dataSelect: string;
  setDropDownShow: (show: boolean) => void;
  dropDownShow: boolean;
  handleSelect: (item: { id: string; name: string }) => void;
  placeholder: string;
};

const DropDownCommon: React.FC<DropDownCommonProps> = ({
  data,
  dataSelect,
  setDropDownShow,
  dropDownShow,
  handleSelect,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setDropDownShow(!dropDownShow)}
        style={styles.dropdownButton}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={placeholder}
      >
        <Text style={dataSelect === '' ? styles.placeholderText : styles.selectedText}>
          {dataSelect === '' ? placeholder : dataSelect}
        </Text>
        <View style={styles.dropIcon}>
          <SvgSvgDrop />
        </View>
      </TouchableOpacity>

      {dropDownShow && (
        <FlatList
          scrollEnabled={true}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                handleSelect(item);
                setDropDownShow(false);
              }}
              style={styles.itemButton}
            >
              <Text
                style={[
                  styles.itemText,
                  dataSelect === item.name && styles.selectedItemText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          style={styles.dropdownList}
          contentContainerStyle={styles.dropdownContent}
        />
      )}
    </View>
  );
};

export default DropDownCommon;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.$white,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 6,
    elevation: 4,
  },
  dropIcon: {
    marginLeft: 'auto',
  },
  selectedText: {
    color: '#333',
    fontSize: 16,
    flex: 1,
    fontWeight: '600',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
    flex: 1,
  },
  dropdownList: {
    backgroundColor: colors.$white,
    borderRadius: 6,
    marginVertical: 8,
    paddingVertical: 8,
    elevation: 4,
    
  },
  itemButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    color: '#333',
    fontSize: 16,
  },
  selectedItemText: {
    fontWeight: '700',
  },
  dropdownContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
});
